import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

class Task extends Model {
  declare id: number;
  declare title: string;
  declare description: string | null;
  declare completed: boolean;
  declare createdAt: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "Tasks",
    timestamps: false,
  }
);

export default Task;
