import { Schema, model, Document } from "mongoose";

interface IDiscographyCover extends Document {
  coverData: Buffer,
}

const discographyCoverModelSchema = new Schema<IDiscographyCover>({
  coverData: {
    type: Buffer,
    required: true
  }
});

const DiscographyCoverModel = model<IDiscographyCover>("DiscographyCover", discographyCoverModelSchema);

export default DiscographyCoverModel;