import Depoimento from "@/src/components/Depoimento/Depoimento"
import { IconStar, IconStarFilled } from "@tabler/icons-react"

type Testimonials = {
    id: string
    name: string
    image: string
    comment: string
    rating: string
    customerTime: string
    createdAt: string
    stayed: string
}

interface TestimonialItem {
    dados: Testimonials[]
    rating: string
}

const AcomodacaoDepoimentos = (props: TestimonialItem) => {
    return (
        <div className="w-full border-blue-500 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <h2 className="font-bold text-lg">Depoimentos</h2>
            <div className="flex gap-1 items-center">
                <IconStarFilled width={15}/>
                <p className="text-sm">{props.rating}</p>
            </div>
            <div className="flex flex-col gap-3 mt-3">
                {props.dados.map((item, index) => (
                <Depoimento
                    key={index}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    comment={item.comment}
                    rating={item.rating}
                    customerTime={item.customerTime}
                    createdAt={item.createdAt}
                    stayed={item.stayed}
                />
            ))}
            </div>
        </div>
    )
}

export default AcomodacaoDepoimentos