<h1> Welcome</h1>
<p>I really like cyberpunk edge runners so seeing as the new season is on the way i made this api. hopefully i will be able too make something that can be used in multiple projects</p>

>[!NOTE]
>This api does include Cors

<hr>

<h3>Base url</h3>

<a>http://cyberpunk-edgerunners-api.vercel.app</a>

<h2>Episodes</h2>

<a>http://cyberpunk-edgerunners-api.vercel.app/ep</a>
<p>Episodes object (it has ten so far)</p>

```json
[
    {
        "episode": "(episode name)",
        "desc": "(description)"
    }
]
```
> [!IMPORTANT]
> I havent double checked these so far.

<h3>Characters</h3>
<a>http://cyberpunk-edgerunners-api.vercel.app/char</a>
<p>Characters object</p>

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
        "placeOfBirth: "",
        "picture": "(link too the api's picture)",
        "firstApperance": ""
    }
}
```
<h4>Amount</h4>
<p>in the begining it will hold all the main characters and i might make a seperate one for side. dont know yet. so far it has:</p> 

```js
["David", "Lucy", "Rebecca", "Maine"]
```
> [!NOTE]
> It will be worked on in the comming days
