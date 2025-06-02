
import React from 'react';

interface KeyInsightProps {
  children: React.ReactNode;
  title?: string;
}

export const KeyInsightCallout: React.FC<KeyInsightProps> = ({ children, title = "Key Insight" }) => (
  <div className="key-insight-callout">
    <div className="callout-icon">💡</div>
    <div className="callout-content">
      <h4>{title}</h4>
      {children}
    </div>
  </div>
);

interface PEFocusProps {
  children: React.ReactNode;
  title?: string;
}

export const PEFocusBox: React.FC<PEFocusProps> = ({ children, title = "PE Portfolio Application" }) => (
  <div className="pe-focus-box">
    <div className="pe-header">
      <span className="pe-icon">🎯</span>
      <h4>{title}</h4>
    </div>
    {children}
  </div>
);

interface PricingHighlightProps {
  children: React.ReactNode;
  title?: string;
}

export const PricingHighlight: React.FC<PricingHighlightProps> = ({ children, title = "Cost Considerations" }) => (
  <div className="pricing-highlight">
    <div className="pricing-header">
      <span className="price-icon">💰</span>
      <h4>{title}</h4>
    </div>
    {children}
  </div>
);

interface ActionChecklistProps {
  items: string[];
  title?: string;
}

export const ActionChecklist: React.FC<ActionChecklistProps> = ({ items, title = "Action Checklist" }) => (
  <div className="action-checklist">
    <h4>{title}</h4>
    {items.map((item, index) => (
      <div key={index} className="checklist-item">
        <span className="checkmark">✓</span>
        <span className="item-text">{item}</span>
      </div>
    ))}
  </div>
);

interface ExpertTipProps {
  children: React.ReactNode;
}

export const ExpertTip: React.FC<ExpertTipProps> = ({ children }) => (
  <div className="expert-tip">
    <span className="tip-icon">👨‍💼</span>
    <span className="tip-label">Expert Tip:</span>
    <span className="tip-text">{children}</span>
  </div>
);

interface WarningBoxProps {
  children: React.ReactNode;
}

export const WarningBox: React.FC<WarningBoxProps> = ({ children }) => (
  <div className="warning-box">
    <span className="warning-icon">⚠️</span>
    <span className="warning-text">{children}</span>
  </div>
);
