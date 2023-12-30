// q1: What are 3 things node.js has that the client side javascript doesn’t
// have. And the reasons why.

// 1.	File System Access:
// Node.js allows server-side JavaScript to access the file system of the hosting machine. while
// Web browsers restrict access to the local file system due to security concerns.

// 2.	Network Communication:
// Node.js enables server-side JavaScript to perform network-related tasks, such as making HTTP requests, implementing web sockets, and creating TCP/UDP servers. This is essential for building scalable and real-time applications on the server side. While client-side JavaScript can make asynchronous requests using technologies like AJAX, it operates within the constraints of the browser's security policies. Cross-origin restrictions and the same-origin policy can limit the ability to make requests to different domains.

// 3.	Operating System Interaction:
// Node.js allows interaction with the underlying operating system by providing modules like child_process that enable the execution of external commands and processes.
// Client-side JavaScript is intentionally sandboxed within the browser for security reasons. 

// q2: What are 3 things the client side javascript has that node.js doesn’t
// have. And the reasons why.

// 1.	Access to the DOM (Document Object Model):
// Client-side JavaScript, running in web browsers, has direct access to the DOM, allowing it to manipulate the structure, style, and content of web pages. This capability is essential for creating dynamic and interactive user interfaces on the client side.
// Node.js Limitation: Node.js is designed for server-side JavaScript execution and does not have direct access to the DOM.

// 2.	Browser-Specific APIs:
// Client-side JavaScript has access to various browser-specific APIs that provide functionalities like handling user events, making HTTP requests (e.g., Fetch API), managing browser history, and accessing the browser's storage (e.g., localStorage). These APIs enable the development of rich, interactive web applications.
//  Node.js does not have direct access to browser-specific APIs because it runs outside of the browser environment. It is focused on server-side operations and lacks features tailored to browser interactions.

// 3.	Window and Navigator Objects:
// Client-side JavaScript has access to the window and navigator objects, which provide information about the browser window, document, and user's device. This information includes details such as screen size, user agent, location, and more. These objects are crucial for creating responsive and adaptive web applications.
// Node.js does not have a window object or direct access to browser-specific information. It operates in a server-side environment where such information is not relevant. Instead, Node.js provides its own set of modules and APIs for server-side tasks.
