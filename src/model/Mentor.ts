import mongoose, { Document, Schema, Types, Model } from "mongoose";
import { ISlot, SlotSchema } from "./Slot"; // Import SlotSchema correctly here

export interface IMentor {
  // experienceYears: number | undefined

  language: string[];
  industry: string;

  isBooked: boolean;
  // step1
  // _id?: Schema.Types.ObjectId;
  first_name: string;
  last_name: string;
  display_name: string;
  username: string;
  propic: string;
  linkedinUrl: string;
  whatsappNumber: string;
  offers: string[];
  fullname: string;
  email: string;

  specialization: string;
  services: string[];
  expertise: string;
  other_expertise?: string;
  popularServices: string[];
  slot: ISlot[]; // Correct reference to ISlot
  noticePeriod: number;
  duration: string;
  intro: string;
  about: string;
  createdAt?: Date;
  updatedAt?: Date;
  ratings_count: number;
  registration_intent: string;
  domain: string;
  experience: string;
  companyName: string;
  skills: string[];
  languages: string[];
  workProfession: string;
  userLink: string;
  mentorship: string;
}

export interface IMentor extends Document {}

const MentorSchema: Schema = new Schema(
  {
    fullname: { type: String, default: "" },
    first_name: { type: String, default: "" },
    last_name: { type: String, default: "" },
    display_name: { type: String, default: "" },
    userLink: { type: String, default: "" },
    username: { type: String, default: "", unique: true },
    phone: { type: String, default: "" },
    propic: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    specialization: { type: String, default: "" },
    linkedinUrl: { type: String, default: "" },
    whatsappNumber: { type: String, default: "" },
    offers: { type: [String], default: [] },
    services: { type: [String], default: [] },
    expertise: { type: String, default: "" },
    other_expertise: { type: String, default: "" },
    popularServices: { type: [String], default: [] },
    duration: { type: String, default: "" },
    ratings_count: { type: Number, default: 0 },
    intro: { type: String, default: "" },
    about: { type: String, default: "" },
    registration_intent: { type: String },
    domain: { type: String, default: "" },
    experience: { type: Number, default: 0 },
    companyName: { type: String, default: "" },
    skills: { type: [String], default: [] },
    languages: { type: [String], default: [] },
    workProfession: { type: String, default: "" },
    slot: [{ type: Schema.Types.ObjectId, ref: "Slot" }],
    industry: { type: String, default: "" },
    mentorship: { type: String, default: "" }, // Use SlotSchema here
  },
  { timestamps: true }
);

MentorSchema.index({ fullname: "text" });
MentorSchema.index({ username: "text" });

const Mentor: Model<IMentor & Document> =
  mongoose.models.Mentor ||
  mongoose.model<IMentor & Document>("Mentor", MentorSchema);

export const getMentors = () => Mentor.find();
export const getMentorByEmail = (email: string) => Mentor.findOne({ email });

export default Mentor;
