import mongoose, { Schema, Document, Types, Model } from "mongoose";

export interface ISlot {
  _id?: Schema.Types.ObjectId;
  slot: {
    day: string;
    isAvailable: boolean;
    time: [
      {
        from: string;
        to: string;
      }
    ];
    _id?: Schema.Types.ObjectId;
  }[];
  isBooked: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  mentorId?: Schema.Types.ObjectId;
  mentorEmail?: string;
  date?: Date | string;
}

export const SlotSchema: Schema = new Schema<ISlot & Document>(
  {
    slot: [
      {
        day: { type: String, required: true },
        isAvailable: { type: Boolean, required: true },
        time: [
          {
            from: { type: String, required: true },
            to: { type: String, required: true },
            _id: false,
          },
        ],
        _id: false,
      },
    ],
    mentorId: { type: Schema.Types.ObjectId },
    mentorEmail: { type: String },
    isBooked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Slot: Model<ISlot & Document> =
  mongoose.models.Slot || mongoose.model<ISlot & Document>("Slot", SlotSchema);
