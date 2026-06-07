interface PolicySection {
    title: string;
    content: string;
}

interface Props {
    title: string;
    intro: string;
    sections: PolicySection[];
}
export default function PolicyPage({title,intro,sections}:Props) {
    return (
    
        <main className="container mx-auto px-4 lg:px-8 py-16 max-w-3xl">
            <h1 className="font-bold text-3xl md:text-4xl mb-6">{title}</h1>
            <div className="text-muted-foreground space-y-4 leading-loose">
            <p>{intro}</p>
            {sections.map((section,index)=>(
                <div key={index} className="space-y-2">
                    <h2 className="font-bold text-xl text-foreground">الحجوزات</h2>
                    <p>{section.content}</p>
                </div>
                
            ))}
            </div>
        </main>
    
    )
}
