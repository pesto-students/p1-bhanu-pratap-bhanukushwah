# Problem Statement
When a user enters an URL in the browser, how does the browser fetch the desired result? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.

<ol>
  <li>What is the main functionality of the browser?</li>
  <li>Components of a browser High-Level</li>
  <li>Rendering engine and its use</li>
  <li>Parsers (HTML, CSS, etc)</li>
  <li>Script Processors</li>
  <li>Tree construction</li>
  <li>Order of script processing</li>
  <li>Layout and Painting</li>
</ol>


## Solution

### Main Functionality of the browser

The main function of the browser is to retrieve information from the World Wide Web and making it available for users. The browser is the client run on a computer that contacts the Web server and requests information. The Web server sends the information back to the Web browser which displays the results on the devices. Browser performs many operation under the hood to present the informatio to user.

### High-Level Components of a browser 

![Diagram of High Level Components of a browser](/Week-1/Exercise%201.1/High-Level-Components.PNG)

- <b>The User Interface :</b> This is the component with which user interacts to perform any task, it consists of address bar where user enters the url, back or next button, resolad stop and etc. 

- <b>Browser Engine :</b> This works as a bridge between the ui and the rendering engine. It queries and manipulate the rendering engine based on the user input and interaction.

- <b>The Rendering Engine :</b>  It is responsible for rendering the requested web page on the browser screen. It parse the HTML, CSS and JS, and display it on the screen.

- <b>Networking :</b> This component is responsible to handles all sort communication and security between the client and server.

- <b>JavaScript Interpreter :</b> It interprets and execute the javascript code and the interpreted results are sent to rendering engine for displaying it to the user.

- <b>UI Backend :</b> This component uses the user interface methods of the underlying operating system. It is mainly used for drawing basic widgets (windows and combo boxes).

- <b>Data Persistence/Storage :</b> Browsers has storage mechanisms to store informatio eg. localStorage, IndexedDB, WebSQL, Cookie, sessionStorage and FileSystem.

### Rendering engine and its use

Once a client make a request to get the particular web page, the rendering engine starts fetching the content of the requested document. It gets the content of the web page in chunks of 8KBs from the networking layer. After this, the flow of the rendering engine begins.

Parsing HTML to construct the DOM tree -> Render tree construction -> Layout of the render tree-> Painting the render tree

The four basic steps include:

- The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”

- Simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.

- Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.

- The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.

### Parsers (HTML, CSS, etc) & Script Processors & Tree construction

The HTML content goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.

Now we know, html tag starts at the top and then the head tag starts before the html ends so we can figure out that the head is inside html and create a tree out of it. Thus we then get something called a parse tree which eventually becomes a DOM tree as shown in the image below:

DOM tree is what we access when we do document.getElementById or document.querySelector in JavaScript.
![Diagram of DOM Tree](/Week-1/Exercise%201.1/dom-tree.PNG)


Just like HTML, CSS goes through a similar process where we have the CSS text and then the tokenization of CSS to eventually create something called a CSSOM or CSS Object Model.

This is what a CSS Object Model looks like:
![Diagram of CSSOM Tree](/Week-1/Exercise%201.1/cssom-tree.PNG)


The final render is constructed by merging both the DOM and CSSOM tree which then called as render tree. Render tree contains all the information of the visible content including their CSS style information. The render tree does not include script, meta tags etc. as they are not included in the render output. The dom elements which are hidden through the CSS property are also excluded from the render tree, such as elements with display: none property. But the elements with property visibility: none or opacity:0 will be added on the render tree and will also take space on the screen. For every node, a matching custom property is applied. The final render tree has then proceeded to the layout stage.

### Order of script processing

##### Scripts
The scripts execution is synchronous. If the script is external then the resource must first be fetched from the network–this is also done synchronously, and parsing halts until the resource is fetched. we can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. We can also adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

##### Style sheets

Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems. It seems to be an edge case but is quite common. Firefox blocks all scripts when there is a style sheet that is still being loaded and parsed. WebKit blocks scripts only when they try to access certain style properties that may be affected by unloaded style sheets.

### Layout and Painting

##### Layout

The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position so it takes all the properties related to the position (height, width, position, top left right bottom, etc) from The Render Tree and places the elements on the screen.

##### Paint
After Layout, a Paint happens. Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors. After the paint, we see the content on the screen and the first time we see something other than a white screen is called 'First Paint'. The term First Paint is used in performance reports to show how long your website took to show something on the screen.



### Before even knowing what happens after entering the URL. We must know what a URL is?

#### URL - Uniform Resource Locator
The name itself is self-explanatory, it has the location or address of the unique resource on the web which we want to access. 

##### Parts of URL

```https://www.google.com/some-page```

- The first part of the URL is "https". Which tells the browser which protocol to use. It can be HTTP, HTTPS, FTP, etc. A protocol is a set of rules that a browser use for communication over the network.

- The second part is a domain name 'www.google.com'. It's like the address of the website. We use this address to reach the server which serves the information.

#### Domain Name and Domain Name System: 
A domain name is a unique identity to our website. Every single URL on the internet is mapped to a unique IP address. This IP address belongs to the location of the computer which hosts the server on which we are requesting access. So if we want to reach any server we can reach it using the domain name "www.google.com" or by IP address "http://142.250.77.78". 

The database that maintains the domain name and the particular IP address it links to it is known as <b>Domain Name System or DNS.</b> If we have the IP address why do we need the Domain Name? The purpose of the Domain name is to make it human-friendly.

### Now let's understand what happens when a user enters an URL in the browser.

The browser checks in the cache for a DNS record to find the corresponding IP address of the domain name. there are four layers of cache through which this domain name query look through.

- The first one is the browser cache, As the browser maintains its DNS records of the website the user has visited earlier. 

- The second place to look for the record is the OS cache
- Which is followed by the Router cache
- and last the one is ISP cache. 

If the record is not present in any of the caches, the request goes to the root server. Which will tell us from where we can get this information. If we are searching the IP address of the top-level domain(.com or .in). It tells the resolver server to search the TLD server (Top Level Domain). The resolver asks the TLD server to give the IP address of our domain name. The resolver asks it to Authoritative Name Server. It is responsible for knowing everything about the domain name. It finally gets the IP address and send back it to the browser.

Once the browser receives the IP address, It initiates a connection, to communicate over the network using internet protocol. And this TCP/IP protocol is the most common protocol and in this protocol the connection is built between client and server in a 3-way handshaking process.

- The client sends an SYN message to check whether the server is open for a new connection or not.
- If the server is open for a new connection, it sends an acknowledgment message.
- Once the client receives the acknowledgment it sends back an acknowledgment message. 

Once this process completes the connection will establish. Now, the clients and server are ready to communicate and transfer information.

The browser will send a GET request by asking for google.com. This request will contain additional information like the type of request it will accept (Accept Header), Host, Encoding type, and other connection headers.

If the server approves the request, It responds with the web page we requested with other information like status code, type of compression, caching information, and other information.

If we look at the server response, the first would be the status code. which is quite important and tells about the status of the response. There are five types of statuses:
- 1XX indicates an informational message only
- 2XX indicates the success of some kind
- 3XX redirects the client to another URL
- 4XX indicates an error on the client's side
- 5XX indicates an error on the server's side

If we encounter any error, we should look at the HTTP response to check what type of status code we have received.

The browser loads the HTML received from the server. It converts the HTML into a DOM (Document Object Model). The DOM represents the document in the computer's memory.
The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images and videos and linked CSS and then JavaScript.
The browser parses the fetched CSS, and sorts the different rules by their selector types into different "buckets", e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree).
Parser will parse html and css to create DOM tree and CSSOM tree which is merged together to create the render tree.
The final is step is layout(Calculating actual cordinates) and painting it on the screen.