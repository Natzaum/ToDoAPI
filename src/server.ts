import dotenv from "dotenv";
import sequelize from "./database";
import app from "./app";

dotenv.config();

sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

const PORT: number = parseInt(`${process.env.PORT || 3000}`);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}!`);
});
