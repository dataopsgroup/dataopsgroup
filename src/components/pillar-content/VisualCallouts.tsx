
import React from 'react';

interface KeyInsightCalloutProps {
  title: string;
  children: React.ReactNode;
}

export const KeyInsightCallout: React.FC<KeyInsightCalloutProps> = ({ title, children }) => {
  return (
    <div className="key-insight-callout">
      <div className="callout-icon">💡</div>
      <div className="callout-content">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
};

interface PricingHighlightProps {
  title: string;
  children: React.ReactNode;
}

export const PricingHighlight: React.FC<PricingHighlightProps> = ({ title, children }) => {
  return (
    <div className="pricing-highlight">
      <div className="pricing-header">
        <div className="price-icon">💰</div>
        <h4>{title}</h4>
      </div>
      {children}
    </div>
  );
};

interface ExpertTipProps {
  children: React.ReactNode;
}

export const ExpertTip: React.FC<ExpertTipProps> = ({ children }) => {
  return (
    <div className="expert-tip">
      <div className="tip-icon">🎯</div>
      <div>
        <span className="tip-label">Expert Tip: </span>
        <span className="tip-text">{children}</span>
      </div>
    </div>
  );
};

interface WarningBoxProps {
  children: React.ReactNode;
}

export const WarningBox: React.FC<WarningBoxProps> = ({ children }) => {
  return (
    <div className="warning-box">
      <div className="warning-icon">⚠️</div>
      <div className="warning-text">{children}</div>
    </div>
  );
};

interface ActionChecklistProps {
  title: string;
  items: string[];
}

export const ActionChecklist: React.FC<ActionChecklistProps> = ({ title, items }) => {
  return (
    <div className="action-checklist">
      <h4>{title}</h4>
      {items.map((item, index) => (
        <div key={index} className="checklist-item">
          <div className="checkmark">✓</div>
          <div className="item-text">{item}</div>
        </div>
      ))}
    </div>
  );
};
