import { Schema, model, Document } from 'mongoose';

type TSocialMedia = Document & {
  name: string;
  imgID: string;
  url: string;
};

const socialMediaSchema = new Schema<TSocialMedia>({
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

const SocialMediaModel = model<TSocialMedia>('socialMedia', socialMediaSchema);

export default SocialMediaModel;
