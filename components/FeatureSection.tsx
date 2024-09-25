import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
} from '@chakra-ui/react'
import Image from 'next/image'; // Use next/image instead of img for better performance
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface FeatureProps {
    image: string;
    button?: boolean;
}

export default function FeatureSection({ image, button }: FeatureProps) {
    return (
        <Container maxW={'5xl'} mt={10} p={20}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
                <Flex>
                    <Image
                        alt={'feature image'}
                        src={image}
                        objectFit={'cover'}
                        width={500}  // specify width
                        height={500} // specify height
                    />
                </Flex>
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Stack spacing={4}>
                        <Heading color={'#091133'} fontSize={'36px'} fontWeight={500}>
                            Light, Fast & Powerful
                        </Heading>

                        <Text color={'#6F7CB2'} fontSize={'16px'}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            <br/><br />
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </Text>

                        {button && (
                            <div className="flex items-center">
                                <Link
                                    className={`${buttonVariants({
                                        size: "lg",
                                    })} font-medium`}
                                    href="/sign-up"
                                >
                                    Purchase Now
                                </Link>
                            </div>
                        )}
                    </Stack>
                </Flex>
            </SimpleGrid>
        </Container>
    )
}
