<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/yujhenchen/learning-journal-react">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Learning Journal</h3>

  <p align="center">
    My solo project - Learning Journal (from The Frontend Developer Career Path of Scrimba)
    <br />
    <a href="https://github.com/yujhenchen/learning-journal-react"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="" target=”_blank”>View Demo</a>
    ·
    <a href="https://github.com/yujhenchen/learning-journal-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/yujhenchen/learning-journal-react/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#issues-and-solutions">Issues and solutions</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

My solo project - Learning Journal.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![ReactRouter]][ReactRouter-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Installation

Install packages

```sh
yarn
```

Launch at localhost in development mode

```sh
yarn start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

- [ ]

See the [open issues](https://github.com/yujhenchen/learning-journal-react/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ISSUES AND SOLUTIONS -->

## Issues and solutions

### src\index.js Line 0:  Parsing error: You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously

#### Solution
Change **src\index.js** from:

```
...

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

to:
```
...

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<!-- Jen Chen - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com -->

Jen Chen

Project Link: [https://github.com/yujhenchen/learning-journal-react](https://github.com/yujhenchen/learning-journal-react)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Scrimba](https://scrimba.com/)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/yujhenchen/learning-journal-react.svg?style=for-the-badge
[contributors-url]: https://github.com/yujhenchen/learning-journal-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yujhenchen/learning-journal-react.svg?style=for-the-badge
[forks-url]: https://github.com/yujhenchen/learning-journal-react/network/members
[stars-shield]: https://img.shields.io/github/stars/yujhenchen/learning-journal-react.svg?style=for-the-badge
[stars-url]: https://github.com/yujhenchen/learning-journal-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/yujhenchen/learning-journal-react.svg?style=for-the-badge
[issues-url]: https://github.com/yujhenchen/learning-journal-react/issues
[license-shield]: https://img.shields.io/github/license/yujhenchen/learning-journal-react.svg?style=for-the-badge
[license-url]: https://github.com/yujhenchen/learning-journal-react/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[ReactRouter]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main