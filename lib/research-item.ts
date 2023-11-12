import ResumeItem from "./resume-item";

export default class ResearchItem implements ResumeItem {
  private pis?: string[];
  private role?: string;

  constructor(data?: object) {
    if (data) {
      this.pis = data?.pis;
      this.role = data.role;
    }
  }
}
