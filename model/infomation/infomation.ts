import { Schema, model, Document } from 'mongoose';

interface IInfomation extends Document {
  text: string;
}

const infomationModelSchema = new Schema<IInfomation>({
  text: {
    type: String,
    required: true,
  },
});

const InfomationModel = model<IInfomation>('Infomaton', infomationModelSchema);

export default InfomationModel;
