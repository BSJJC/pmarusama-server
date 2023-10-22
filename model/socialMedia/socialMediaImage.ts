import { Schema, model, Document } from 'mongoose';

type TSocialMediaImage = Document & {
  imageBuffer: Buffer;
};

const socialMediaImageSchema = new Schema<TSocialMediaImage>({
  imageBuffer: {
    type: Buffer,
    required: true,
  },
});

const SocialMediaImageModel = model<TSocialMediaImage>('socialMediaImage', socialMediaImageSchema);

export default SocialMediaImageModel;
