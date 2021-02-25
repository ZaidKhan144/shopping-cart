# Uptown Skate Shop

An E-commerce skateboard website with all the shopping cart functionalities.

## Homepage

![image](https://i.postimg.cc/mg2DtQTw/skate-shop.png)

## Shop page

![image](https://i.postimg.cc/WzFmRQHd/Uptown-Skate-Shop.png)

## Shop Item page

![image](https://i.postimg.cc/bYttg1Dg/Uptown-Skate-Shop-1.png)

## Cart Items page

![image](https://i.postimg.cc/rp7pRYJk/Uptown-Skate-Shop-2.png)

## Installation and Setup Instructions

To make below steps work, You will need node and npm installed globally on your machine.

```bash
# Clone this repository
$ git clone https://github.com/ZaidKhan144/shopping-cart.git

# Enter the Git folder
$ cd shopping-cart

# Enter the project folder
$ cd skateboard

# Install dependencies
$ npm install

# Start the project
$ npm start
```

## Tech used
- React
- Styled Components
- Framer Motion
- Styled Icons
- ESLint - A linter tool to standardize code
- Prettier - Code formatter
- GitHub Pages

## Reflection

This project's main goal was to design and develop a multiple-page application using `react-router-dom`. The app can add, update, and remove items from the cart. 

I started this project by creating a `create-react-app` boilerplate and then added `react-router-4.0`. 

One of the main challenges I ran into was adding an item to the cart. I knew I have to match the item ID with the index's ID. In my mind, there was two JS method from where I could achieve this, one was using findIndex, and the other was to use indexOf with the map. After a bit of researching, I opt to choose findIndex to get better performance. The thing with findIndex is that it will stop as soon as it finds the item you're looking for, whereas the map doesn't care what item you're searching for. Even if the item is at first index, it will still loop through every item to create a new array of Indexes. This would be quite a lot of work to achieve the same result. I know it doesn't make any difference for data this short, but still, I wanted to try the best.  

Another challenge I came across was designing the Cart Item page. Initially, I made the main grid for columns, cart, and order summary. And then another grid inside the cart to handle cart items detail. Now at this point, It was working great for one item, but as soon as I added one more item, it appeared at the order summary place instead of dropping in the cart column, and the order summary was moved to the second row. After a bit of research, it turns out the CSS grid generates rows dynamically by default. I tried handling it with other grid properties but couldn't achieve the desired result. On thinking about this overnight, I realized why don't wrap the cart items detail into a parent grid and stretch cart items equal to the number of columns. This way, each item will render on its own row without overflowing the cart grid.  

The last challenge I faced was to hide browser video controls. On inspecting on video, we get to see two options Loop and Show Controls. So to hide those options, I made a mask at the top and positioned it relative to the video. Now, if you inspect a video, you won't see those options. 

At the end of the day, the technologies implemented in this project are `React`, `React-Router`, `styled-components`, and `framer-motion library`. I chose `styled-components` because of its ability to make reusable components to handle `CSS` and `framer-motion` because of its declarative syntax. I have also made this responsive to give an optimized browsing experience. 

In the future, I might add more product options and create a filter to search for desired results.

You can visit the App here: https://zaidkhan144.github.io/shopping-cart/#/

Funny story, Remember when I mentioned wrapping cart items by a parent div? So I was struggling to come up with its name to use it as a component, and I had to make sure I don't forget it as well, so I named it `DaddyCart` 😂

![image](https://i.postimg.cc/W34gvCfG/Etfm-Yr-WYAMStf.png)
