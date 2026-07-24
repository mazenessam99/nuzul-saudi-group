
import teamImage from '../../assets/team.webp'
export default function CTASection() {
    return (
        <section className="container mx-auto px-4 lg:px-8 pb-20">
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl border border-border overflow-hidden">
                <img src={teamImage} alt="TeamImage" className='h-full w-full object-cover aspect-4/3 lg:aspect-auto' />
                <div className='p-10 md:p-14 bg-card flex flex-col justify-center'>
                    <span className='text-xs text-gold font-bold mb-2'>فريقنا</span>
                    <h3 className='text-3xl font-bold mb-3'>أيدٍ تصنع التجربة</h3>
                    <p className='text-muted-foreground leading-loose mb-6'>أكثر من 2,000 موظف من أمهر المتخصصين في الضيافة والطهي والكونسيرج، يعملون يومياً ليجعلوا إقامتك حكاية تستحق أن تُروى.</p>
                    <div className="flex flex-wrap gap-2">
                        {["Hospitality", "Culinary", "Concierge", "Spa & Wellness", "Events"].map((tag) => (
                            <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/30">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
