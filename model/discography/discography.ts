import { Schema, model, Document } from 'mongoose';

type TSong = {
  name: string;
  credits: string;
};

type TDiscography = Document & {
  releaseDate: string;
  name: string;
  coverObjectIDs: string[];
  stprLink: string;
  songs: TSong[];
};

const discographyModelSchema = new Schema<TDiscography>({
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
    type: [] as TSong[],
    required: true,
  },
});

const DiscographyModel = model<TDiscography>('Discography', discographyModelSchema);

export default DiscographyModel;
