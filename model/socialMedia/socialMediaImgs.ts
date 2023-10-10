import { Schema, model, Document } from 'mongoose';

interface ISocialMediaImg extends Document {
  imageData: Buffer;
}

const socialMediaImgSchema = new Schema<ISocialMediaImg>({
  imageData: {
    type: Buffer,
    required: true,
  },
});

const SocialMediaImgModel = model<ISocialMediaImg>('socialMediaImg', socialMediaImgSchema);

export default SocialMediaImgModel;
