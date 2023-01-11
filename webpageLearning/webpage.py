from bs4 import BeautifulSoup
from urllib.request import urlopen

with urlopen("https://m.zum.com/#!/home") as response :
    soup = BeautifulSoup(response, 'html.parser')
    for anchor in soup.find_all('a') :
        print(anchor.get('href','/'))
