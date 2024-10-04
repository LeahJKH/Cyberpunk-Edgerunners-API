# Welcome
I really like cyberpunk edge runners so seeing as the new season is on the way i made this api <br>

page link: http://cyberpunk-edgerunners-api.vercel.app
<br>
link: http://cyberpunk-edgerunners-api.vercel.app/ep
Episodes object (it has ten so far)
```json
[
    {
        "episode": "(episode name)",
        "desc": "(description)"
    }
]
```
<br> <br>
link: http://cyberpunk-edgerunners-api.vercel.app/char
Characters object
```json
{
    "(character first name)": {
        "name": "(character full name)",
        "agePreTimeSkip": "",
        "agePostTimeSkip": "",
        "cyberware": [
            (array of all cyberware)
        ],
        "voicedBy": [
            (array of voice actors)
        ],
        "aliases": [
            (aliases in Cyberpunk edgerunners)
        ],
        "picture": "(link too the api's picture)",
        "firstApperance": ""
    }
}
```
so far it has ["David"]