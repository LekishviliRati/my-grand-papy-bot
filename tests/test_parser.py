"""
Test of Input_parser class.
"""

from application.parser import InputParser

input_1 = \
    " Peux-tu, m'indiquer l'adresse d'openlassrooms ? "
input_2 = \
    " Est-ce que tu connais l'addresse de la mairie de Paris ? "


def test_input_1():
    """Test of Input_parser class."""
    parsed = InputParser(input_1)
    assert parsed.parsed_input == "adresse openlassrooms"


def test_input_2():
    """Test of Input_parser class."""
    parsed = InputParser(input_2)
    assert parsed.parsed_input == "addresse mairie paris"
