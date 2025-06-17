import json
import os
import subprocess

with open("members.json") as f:
    members = json.load(f)

    members_N = [
        "staff",
        "kenkyusei",
        "sankisei",
        "yonkisei",
        "shinyonkisei",
        "gokisei",
        "rokisei",
    ]
    for index in ["N1", "N2", "N3", "N4", "N5", "N6"]:
        for member in members[index]:
            members_N.append(member["romaji"])
    for member in members_N:
        name = member.lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])

    members_S = ["sakurazaka46-yonkisei"]
    for index in ["S1", "S2", "S3", "S4"]:
        for member in members[index]:
            members_S.append(member["romaji"])
    for member in members_S:
        name = member.lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Sakurazaka46.tsx", "app/" + name + "/page.tsx"])

    members_H = ["poka", "hinatazaka46-gokisei"]
    for index in ["H1", "H2", "H3", "H4", "H5"]:
        for member in members[index]:
            members_H.append(member["romaji"])
    for member in members_H:
        name = member.lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Hinatazaka46.tsx", "app/" + name + "/page.tsx"])
