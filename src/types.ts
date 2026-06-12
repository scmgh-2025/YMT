/**
 * Type declarations for Huachuang Yunxin digital ecosystem portal.
 */

export interface Metric {
  id: string;
  label: string;
  value: string;
  unit: string;
  description: string;
  color: string; // 'rose', 'blue', 'emerald', 'amber', 'purple', etc.
}

export interface EnterpriseIntro {
  name: string;
  ticker?: string;
  regAddress: string;
  description: string;
  ownership: string[];
  coreBusinesses: string[];
  subsidiaries: { name: string; desc: string; type: string }[];
  organizationMetrics: { label: string; count: string; unit: string }[];
}

export interface CompanyYunmatong {
  name: string;
  establishment: string;
  founders: string[];
  qualifications: string[];
  positioning: string;
  mission: string;
}

export interface FeatureBlock {
  title: string;
  points: string[];
}

export interface AchievementBlock {
  title: string;
  points: string[];
  quantitativeMetrics?: { label: string; value: string; unit: string; trend?: string }[];
}

export interface TimelineMilestone {
  year: string;
  subtitle: string;
  title: string;
  positioning: string;
  features: FeatureBlock;
  achievements: AchievementBlock;
}
