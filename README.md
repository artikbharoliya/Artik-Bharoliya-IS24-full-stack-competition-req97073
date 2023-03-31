
# IS24 fullstack competition

This project is made using ReactJS for the frontend and ExpressJs for the backend. The project uses MongoDB atlas to store the data. 


## Application overview

This is a single page application which means it only has one webpage to interact with. The home page of this project displays a table that shows all the products. The table is interactive and allows users to edit and delete the products. Additionally, there is a call-to-action button that allows users to add new products to the table. To ensure that the data is persistent, MongoDB Atlas is used as the database here. This allows users to access the data from anywhere and ensures that it is always up-to-date.


## Run Locally

Clone the project

```bash
  git clone git@github.com:artikbharoliya/Artik-Bharoliya-IS24-full-stack-competition-req97073.git
```

Go to the project directory


Build the docker images

```bash
  docker-compose build
```

Start the application

```bash
  docker-compose up
```

Visit: [localhost:3000](http://localhost:3000/)

If you want to interact with APIs. You can do so by using the same port number but all the API endpoints starts from localhost:3000/api for example for the products API you can make a GET request to [localhost:3000/api/products](http://localhost:3000/api/products)

Note: Using Docker is highly encouraged here to avoid building the frontend and backend separately. 


## Environment Variables

All the environment variables are provided within this repository to avoid the errors in communication. I acknowledge that this practice is not the industry standard but this step is taken to avoid the back and forth communication.

## Future Roadmap

- Additional verification of data in the frontend.
- Search functionality to easily browse through data.
- Better deployment strategy.
- Integration testing. 


## Acknowledgements

 - Usage of database in this project was considered to streamline the crud operations and rapidly develop the APIs due to limited time.


