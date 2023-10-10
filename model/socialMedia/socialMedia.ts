import { Schema, model, Document } from 'mongoose';

interface ISocialMedia extends Document {
  name: string;
  imgID: string;
  url: string;
}

const socialMediaSchema = new Schema<ISocialMedia>({
  name: {
    type: String,
    required: true,
  },
  imgID: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const SocialMediaModel = model<ISocialMedia>('socialMedia', socialMediaSchema);

export default SocialMediaModel;
