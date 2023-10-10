import { Schema, model, Document } from 'mongoose';

interface ISong {
  name: string;
  credits: string;
}

interface IDiscography extends Document {
  releaseDate: string;
  name: string;
  coverObjectIDs: string[];
  stprLink: string;
  songs: ISong[];
}

const discographyModelSchema = new Schema<IDiscography>({
  releaseDate: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  coverObjectIDs: {
    type: [String],
    required: true,
  },
  stprLink: {
    type: String,
    required: true,
  },
  songs: {
    type: [] as ISong[],
    required: true,
  },
});

const DiscographyModel = model<IDiscography>('Discography', discographyModelSchema);

export default DiscographyModel;
