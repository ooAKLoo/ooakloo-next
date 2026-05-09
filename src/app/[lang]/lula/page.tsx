import { InnoxTocSidebar } from '@/components/InnoxTocSidebar';
import { TOC_GROUPS } from './_data';
import {
  BusinessModel1Section,
  BusinessModel2Section,
  BusinessModelSection,
} from './_components/business/BusinessModelSection';
import { CostSection } from './_components/business/CostSection';
import { CreatorRecruitmentSection } from './_components/business/CreatorRecruitmentSection';
import { MarketingSection } from './_components/business/MarketingSection';
import { PrereqSection } from './_components/business/PrereqSection';
import { FoundationSection } from './_components/concept/FoundationSection';
import { HeroSection } from './_components/hero/HeroSection';
import { HardwareCompetitorsSection } from './_components/market-research/HardwareCompetitorsSection';
import { MarketSection } from './_components/market-research/MarketSection';
import { MethodologySection } from './_components/market-research/MethodologySection';
import { SoftwareCompetitorsSection } from './_components/market-research/SoftwareCompetitorsSection';
import { DialogueSection } from './_components/product/DialogueSection';
import { ParentAppSection } from './_components/product/ParentAppSection';
import { ProductOverviewSection } from './_components/product/ProductOverviewSection';
import { SafetySection } from './_components/product/SafetySection';
import { PlaceholderSections } from './_components/shared/PlaceholderSections';
import { ProductDivider } from './_components/shared/ProductDivider';
import { LinkSection } from './_components/strategy/LinkSection';
import { MoatSection } from './_components/strategy/MoatSection';
import { NetworkSection } from './_components/strategy/NetworkSection';
import { AccountSystemSection } from './_components/tech/AccountSystemSection';
import { DeviceLayerSection } from './_components/tech/DeviceLayerSection';
import { MemoryCacheSection } from './_components/tech/MemoryCacheSection';
import { ModelLayerSection } from './_components/tech/ModelLayerSection';
import { MvpScopeSection } from './_components/tech/MvpScopeSection';
import { OrchestrationSection } from './_components/tech/OrchestrationSection';
import { TechOverviewSection } from './_components/tech/TechOverviewSection';
import { ChildMindSection } from './_components/user-mind/ChildMindSection';
import { ParentMindSection } from './_components/user-mind/ParentMindSection';
import { PersonasSection } from './_components/user-mind/PersonasSection';

export default function LulaResearchPage() {
  return (
    <div className="bg-neutral-50 py-10 md:py-16">
      <InnoxTocSidebar groups={TOC_GROUPS} />
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <HeroSection />
        <FoundationSection />
        <MarketSection />
        <HardwareCompetitorsSection />
        <SoftwareCompetitorsSection />
        <MethodologySection />
        <ParentMindSection />
        <ChildMindSection />
        <PersonasSection />
        <MoatSection />
        <NetworkSection />
        <LinkSection />

        <ProductDivider />

        {/* A · 产品侧 */}
        <ProductDivider label="A · 产品侧 · 做什么" delay={0.43} variant="sub" />
        <ProductOverviewSection />
        <PlaceholderSections ids={['form-factor']} delayBase={0.46} />
        <DialogueSection />
        <SafetySection />
        <PlaceholderSections ids={['content']} delayBase={0.54} />
        <ParentAppSection />

        {/* B · 技术侧 */}
        <ProductDivider label="B · 技术侧 · 怎么落" delay={0.57} variant="sub" />
        <TechOverviewSection />
        <DeviceLayerSection />
        <OrchestrationSection />
        <MemoryCacheSection />
        <AccountSystemSection />
        <ModelLayerSection />
        <MvpScopeSection />

        {/* C · 商业 + 推广 */}
        <ProductDivider label="C · 商业 + 推广" delay={0.68} variant="sub" />
        <BusinessModelSection />
        <BusinessModel1Section />
        <BusinessModel2Section />
        <PrereqSection />
        <CostSection />
        <MarketingSection />
        <CreatorRecruitmentSection />
        <PlaceholderSections ids={['roadmap', 'team-risk']} delayBase={0.76} />
      </div>

      <style>{`
        @keyframes lula-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal {
          opacity: 0;
          animation: lula-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--reveal-delay, 0s);
        }
        section[id] {
          scroll-margin-top: 96px;
        }
      `}</style>
    </div>
  );
}
