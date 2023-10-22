import { Schema, model, Document } from 'mongoose';

type TSocialMediaImg = Document & {
  imageData: Buffer;
};

const socialMediaImgSchema = new Schema<TSocialMediaImg>({
  imageData: {
    type: Buffer,
    required: true,
  },
});

const SocialMediaImgModel = model<TSocialMediaImg>('socialMediaImg', socialMediaImgSchema);

export default SocialMediaImgModel;
