import requests
import json
from pprint import pprint

print("let's get Met Portraits")


url_start = "https://www.metmuseum.org/mothra/collectionlisting/search?artist=&department=&era=&geolocation=&material=&offset="
url_end = "&pageSize=0&perPage=20&q=Portrait&searchField=All&showOnly=&sortBy=Relevance"



all_artworks = []

for offset in range(0, 500, 20):
    url = url_start + str(offset) + url_end

    print("\n\n[+] Requesting: " + url)

    result = requests.get(url)
    data = json.loads(result.text)
    artworks = data["results"]

    print("first artwork's artist in the request:")
    pprint(artworks[0]["artist"])

    all_artworks = all_artworks + artworks


with open("myData.json", "w") as outfile:
    json.dump(all_artworks, outfile, indent=4)
