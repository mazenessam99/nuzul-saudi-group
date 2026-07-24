import { Star } from "lucide-react";

interface RatingStarsProps {
    rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
                const fill =
                    rating >= index + 1
                        ? 100
                        : rating >= index + 0.5
                            ? 50
                            : 0;

                return (
                    <div key={index} className="relative w-4 h-4">
                        <Star className="absolute inset-0 w-4 h-4 text-muted-foreground/30" />
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{ width: `${fill}%` }}
                        >
                            <Star className="w-4 h-4 fill-current text-gold" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}