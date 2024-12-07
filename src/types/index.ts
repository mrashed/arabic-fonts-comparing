import { ReactNode } from 'react';

export interface MetricCardProps {
  title: string;
  titleAr: string;
  value: string;
  valueAr: string;
  icon: ReactNode;
  fontClass: string;
  trend?: {
    value: number;
    label: string;
    labelAr: string;
    isPositive: boolean;
  };
}

export interface TableData {
  id: string;
  customer: string;
  customerAr: string;
  status: 'active' | 'inactive';
  amount: number;
  date: Date;
}

export interface StatusBadgeProps {
  status: 'active' | 'inactive';
  fontClass: string;
}

export interface DashboardProps {
  fontClass: string;
}

export type FontVariant = 'cairo' | 'noto-sans' | 'ibm-plex' | 'readex' | 'rubik' | 'vazirmatn' | 'tajawal';