export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean' | 'date'>> = {
  image: {
    id: 'number',
    url: 'string'
  },
  user: {
    id: 'number',
    name: 'string',
    email: 'string',
    password: 'string',
    description: 'string',
    refreshToken: 'string',
    imageId: 'number',
    isActive: 'boolean'
  },
  team: {
    id: 'number',
    name: 'string',
    description: 'string',
    day: 'string',
    time: 'string',
    maxParticipants: 'number',
    userId: 'number',
    imageId: 'number'
  }
};