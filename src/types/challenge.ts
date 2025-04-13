export enum ChallengesStatus {
  Done = "Done",
  InProgress = "In Progress",
  NotStarted = "Not Started",
}

export type ChallengeItem = {
  title: string;
  status: ChallengesStatus;
  github: string;
  path: string;
  Component: React.ComponentType;
};

export type Challenges = ChallengeItem[];