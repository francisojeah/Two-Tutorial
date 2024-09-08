## Two Tutorial

**Two Tutorial** is a user management application developed with **NestJS** and **Node.js**, designed to provide efficient user data management through a RESTful API. The application leverages **Redis** for caching, **Elasticsearch** for powerful search capabilities, and **PostgreSQL** for reliable data storage, ensuring quick data retrieval and smooth backend operations.

### Key Features

- **REST API**: Built with NestJS to manage user data efficiently.
- **Performance Optimization**: Uses **Redis** caching to reduce latency and improve response times.
- **Enhanced Search**: Integrates **Elasticsearch** for fast and scalable search functionalities.
- **Reliable Data Storage**: Utilizes **PostgreSQL** for secure and efficient data management.

### Technologies Used

- **Node.js**: Backend runtime environment.
- **NestJS**: Framework for building efficient, reliable, and scalable server-side applications.
- **Redis**: In-memory data structure store for caching.
- **Elasticsearch**: Search engine for high-performance full-text search and analytics.
- **PostgreSQL**: Database for reliable and consistent data storage.

### How to Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/francisojeah/Two-Tutorial.git
   cd Two-Tutorial
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory and add your environment-specific variables:
   ```plaintext
   REDIS_HOST=<your-redis-host>
   REDIS_PORT=<your-redis-port>
   ELASTICSEARCH_HOST=<your-elasticsearch-host>
   ELASTICSEARCH_PORT=<your-elasticsearch-port>
   POSTGRES_HOST=<your-postgres-host>
   POSTGRES_PORT=<your-postgres-port>
   POSTGRES_USER=<your-postgres-username>
   POSTGRES_PASSWORD=<your-postgres-password>
   POSTGRES_DB=<your-postgres-database>
   ```

4. **Run the Application**
   ```bash
   npm run start:dev
   ```

5. **Access the API**
   - The API will be available at `http://localhost:3000`.

### API Documentation

- The REST API documentation can be accessed via Swagger UI at `http://localhost:3000/api`.

### Contribution

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

### License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
