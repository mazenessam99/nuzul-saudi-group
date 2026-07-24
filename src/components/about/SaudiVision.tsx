import SectionHeader from "../shared/SectionHeader";
import visionBg from '../../assets/vision-bg.jpg'

export default function SaudiVision() {
    return (
        <section className="relative py-20 overflow-hidden ">
            <img src={visionBg} className="absolute w-full h-full inset-0 object-cover" />
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 text-white">
                <SectionHeader theme="dark" eyebrow="Vision 2030" title="شركاء في مستقبل المملكة" subtitle="نفتخر بكوننا جزءاً من رؤية المملكة 2030، نساهم في صناعة سياحة عالمية المستوى ونحتفي بإرث وطننا أمام العالم." />
            </div>


        </section>
    )
}
