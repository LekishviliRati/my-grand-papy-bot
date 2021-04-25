"""
Interact with wikimedia application, to get information.
"""

import requests
from configuration import wiki_url


class wiki_request:
    """
    This class will return a dictionary : wiki_info,
    from wikimedia with given coordinates (lat/lng).
    """
    def __init__(self, latitude, longitude):
        self.get_wiki_info(latitude, longitude)

    def get_wiki_info(self, latitude, longitude):
        """Get information from wikimedia with lat|long."""
        params = {"action": "query",
                  "format": "json",
                  "prop": "extracts|info",
                  "utf8": 1,
                  "exsentences": 2,
                  "exlimit": "1",
                  "generator": "geosearch",
                  "explaintext": 1,
                  "inprop": "url",
                  "ggscoord": f"{latitude}|{longitude}"
                  }

        response = requests.get(wiki_url, params)

        if response.status_code == 200:
            json_response = response.json()
            if "query" in json_response:
                pages = json_response["query"]["pages"]
                pages = (list(pages.values()))

                title = pages[0]["title"]
                description = pages[0]["extract"]
                url = pages[0]["fullurl"]

                wiki_info = {
                    "title": title,
                    "description": description,
                    "url": url
                }

                return wiki_info

        else:
            return response.status_code, 'Not Found'

# test = wiki_request(45.764043, 4.835659)
# print(test.get_wiki_info(45.764043, 4.835659))
