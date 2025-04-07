import json
import os
import subprocess

with open("members.json") as f:
    members = json.load(f)
    for member in members["N"]:
        name = member[1].lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])
    for member in members["NG"]:
        name = member[1].lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])
    name = "staff"
    os.makedirs("app/" + name, exist_ok=True)
    subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])
    name = "sankisei"
    os.makedirs("app/" + name, exist_ok=True)
    subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])
    name = "yonkisei"
    os.makedirs("app/" + name, exist_ok=True)
    subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])
    name = "shinyonkisei"
    os.makedirs("app/" + name, exist_ok=True)
    subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])
    name = "gokisei"
    os.makedirs("app/" + name, exist_ok=True)
    subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])
    name = "rokisei"
    os.makedirs("app/" + name, exist_ok=True)
    subprocess.run(["cp", "app/Nogizaka46.tsx", "app/" + name + "/page.tsx"])

    for member in members["S"]:
        name = member[1].lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Sakurazaka46.tsx", "app/" + name + "/page.tsx"])
    for member in members["SG"]:
        name = member[1].lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Sakurazaka46.tsx", "app/" + name + "/page.tsx"])

    for member in members["H"]:
        name = member[1].lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Hinatazaka46.tsx", "app/" + name + "/page.tsx"])
    for member in members["HG"]:
        name = member[1].lower().replace(" ", "-")
        os.makedirs("app/" + name, exist_ok=True)
        subprocess.run(["cp", "app/Hinatazaka46.tsx", "app/" + name + "/page.tsx"])
    name = "poka"
    os.makedirs("app/" + name, exist_ok=True)
    subprocess.run(["cp", "app/Hinatazaka46.tsx", "app/" + name + "/page.tsx"])
