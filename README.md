# API example for discord bot

This is an example to get random images or videos for your discord bot

## Usage

### For discord bot written in python

For the images/videos
```py
def genshin():
    response = requests.get('https://api.pellinuz.repl.co/api/type=genshin')
    if response.status_code == 200:
        image_url = response.json()['message']
        image_url = str(image_url)
    else:
        print('Error getting random image')
    return image_url
```

For the color
```py
def embedColor():
    response = requests.get('https://api.pellinuz.repl.co/api?type=genshin')
    if response.status_code == 200:
        color = int(response.json()['color'], 16)
        embed_color = discord.Color(color)
    else:
        print('Error getting random color')
        embed_color = discord.Color.default()
    return embed_color
```

Define the functions
```py
genshin_images = genshin()
color_embed = embedColor()
```

Command example
```py
@client.slash_command(name="image", description="Random Image")
async def image(ctx):
    await ctx.respond(genshin())
```

### For discord bot written in js

For the images/videos
```js
async function genshin() {
  const response = await fetch('https://api.pellinuz.repl.co/api?type=genshin');
  if (response.status === 200) {
    const data = await response.json();
    const imageUrl = data.message.toString();
    return imageUrl;
  } else {
    console.log('Error getting random image');
    return null;
  }
}

```

For color
```js
async function embedColor() {
  const response = await fetch('https://api.pellinuz.repl.co/api?type=genshin');
  if (response.ok) {
    const color = parseInt((await response.json()).color, 16);
    const embedColor = new Discord.MessageEmbed().setColor(color);
    return embedColor;
  } else {
    console.log('Error getting random color');
    const embedColor = new Discord.MessageEmbed().setColor('DEFAULT');
    return embedColor;
  }
}
```

NOTE: if the js codes isn't right it isn't my problem, it has been conveted using ChatGPT

## HOST

[![Run on Repl.it](https://replit.com/badge/github/pellinuz/api)](https://replit.com/new/github/pellinuz/api)
