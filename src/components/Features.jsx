import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Stack,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  CommandLineIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

// Chakra + Framer Motion integration - Use motion.create() instead of motion()
const MotionBox = motion.create(Box)

const features = [
  {
    name: 'Healthcare Background',
    description:
      '8 years as an Army nurse brings a unique perspective on user-centric design, critical thinking, and attention to detail in high-pressure environments.',
    icon: HeartIcon,
    color: 'emerald.500',
  },
  {
    name: 'Problem Solver',
    description: 
      'Military training instilled disciplined approaches to complex problems, translating directly to debugging and software architecture.',
    icon: ShieldCheckIcon,
    color: 'teal.500',
  },
  {
    name: 'Clean Code Advocate',
    description: 
      'Writing maintainable, well-documented code is paramount. I believe code should be as clear and precise as medical procedures.',
    icon: CommandLineIcon,
    color: 'cyan.500',
  },
  {
    name: 'Team Collaboration',
    description: 
      'Experience leading medical teams translates to effective collaboration in agile development environments and cross-functional teams.',
    icon: UserGroupIcon,
    color: 'blue.500',
  },
  {
    name: 'Continuous Learner',
    description: 
      'The transition from healthcare to tech showcases adaptability and a growth mindset. Always eager to learn new technologies and best practices.',
    icon: LightBulbIcon,
    color: 'emerald.600',
  },
  {
    name: 'Mission-Driven',
    description: 
      'Whether saving lives or building applications, I bring the same level of dedication and commitment to creating impactful solutions.',
    icon: RocketLaunchIcon,
    color: 'teal.600',
  },
]

export default function Features() {
  return (
    <Box 
      id="skills"
      bgGradient="linear(to-br, emerald.50, teal.50)"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="7xl">
        <MotionBox
          textAlign="center"
          mb={16}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            as="h2"
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, emerald.600, teal.600)"
            bgClip="text"
            fontWeight="extrabold"
          >
            What I Bring to the Table
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            maxW="3xl"
            mx="auto"
          >
            A unique blend of healthcare discipline, military precision, and software development passion
          </Text>
        </MotionBox>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
        >
          {features.map((feature, index) => (
            <MotionBox
              key={feature.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Box
                bg="white"
                p={8}
                rounded="2xl"
                shadow="xl"
                borderWidth="1px"
                borderColor="emerald.100"
                position="relative"
                overflow="hidden"
                _hover={{
                  shadow: '2xl',
                  borderColor: 'emerald.300',
                }}
                transition="all 0.3s"
              >
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  rounded="full"
                  bg={`${feature.color}`}
                  mb={6}
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    bg: feature.color,
                    rounded: 'full',
                    opacity: 0.2,
                    animation: 'pulse 2s infinite',
                  }}
                >
                  <Icon as={feature.icon} w={8} h={8} color="white" />
                </Flex>

                <Stack spacing={3}>
                  <Heading
                    as="h3"
                    size="md"
                    color="gray.800"
                    fontWeight="bold"
                  >
                    {feature.name}
                  </Heading>
                  <Text color="gray.600" lineHeight="tall">
                    {feature.description}
                  </Text>
                </Stack>

                {/* Decorative gradient */}
                <Box
                  position="absolute"
                  top={-10}
                  right={-10}
                  w={40}
                  h={40}
                  bgGradient={`linear(to-br, ${feature.color}, transparent)`}
                  opacity={0.1}
                  rounded="full"
                  pointerEvents="none"
                />
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
