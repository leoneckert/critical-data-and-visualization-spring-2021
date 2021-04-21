import requests
import json
from pprint import pprint

from bs4 import BeautifulSoup

webpage_base = "https://www.j-archive.com/"

result = requests.get("https://www.j-archive.com/listseasons.php")
# print(result.text)

soup = BeautifulSoup(result.text, 'html.parser')

# print(soup)

table_rows = soup.select("tr")
# print(table_rows)

data = dict()

for item in table_rows:
    a_tag = item.select_one("a")
    season_name = a_tag.text
    data[season_name] = []
    # data[season_name]["contestants"] = []
    # print(a_tag)
    # print(a_tag.get("href"))
    season_link = webpage_base + a_tag.get("href")
    print(season_link)

    season_html = requests.get(season_link)
    season_soup = BeautifulSoup(season_html.text, 'html.parser')

    season_rows = season_soup.select("tr")
    for row in season_rows:
        # print(row)
        columns = row.select("td")
        episode_info = columns[0].text.strip()
        episode_name = episode_info.split(",")[0]
        try:
            episode_date = episode_info.split(",")[1].split("aired")[1].strip()
        except:
            episode_date = "unknown"

        contestants = columns[1]
        # print(contestants.text)
        people = contestants.text.strip().split(" vs. ")
        # print(people)
        # print(episode_name)
        # print(episode_date)

        data[season_name].append({
            "episode_name": episode_name,
            "episode_date": episode_date,
            "contestants": people
        })

    print("\n")

    # break
pprint(data)


with open("jeopardy.json", "w") as outfile:
    json.dump(data, outfile, indent=4)
