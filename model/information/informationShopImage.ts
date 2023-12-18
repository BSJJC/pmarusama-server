import { Schema, model, Document } from 'mongoose';

type TInformationShopImage = Document & {
  shopName: string;
  imageBuffer: Buffer;
};

const informationShopImageSchema = new Schema<TInformationShopImage>({
  shopName: {
    type: String,
    require: true,
  },
  imageBuffer: {
    type: Buffer,
    required: true,
  },
});

const InformationShopImageModel = model<TInformationShopImage>('informationShopImage', informationShopImageSchema);

export default InformationShopImageModel;
