export type DocumentTier = 'investor-gated' | 'open-access';

export interface InvestorQualificationData {
  firmName: string;
  contactName: string;
  role: string;
  email: string;
  fundSize: string;
  typicalCheckSize: string;
  isAccredited: boolean;
  investmentThesis: string[];
  linkedinOrWebsite?: string;
  notes?: string;
  qualifiedAt: string;
}

export interface GatedDocument {
  id: string;
  title: string;
  subtitle: string;
  tier: DocumentTier;
  category: 'Strategic' | 'Financial' | 'Technical' | 'Legal' | 'Commercial';
  description: string;
  pages: number;
  updatedDate: string;
  badge: string;
  fileFormat: string;
  downloadFileName: string;
  summaryPoints: string[];
  fullReportText: string;
  githubUrl?: string;
  githubBlobUrl?: string;
  localUrl: string;
  fileType: 'image' | 'pdf' | 'zip';
  fileSize?: string;
}
