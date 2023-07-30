import { Schema, model, Document } from "mongoose";

interface IDiscographyCover extends Document {
  name: string,
  base64string: string
}

const discographyCoverModelSchema = new Schema<IDiscographyCover>({
  name: {
    type: String,
    required: true
  },
  base64string: {
    type: String,
    required: true
  }
});

const DiscographyCoverModel = model<IDiscographyCover>("DiscographyCover", discographyCoverModelSchema);

export default DiscographyCoverModel;