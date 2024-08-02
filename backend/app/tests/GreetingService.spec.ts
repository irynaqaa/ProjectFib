```typescript
import { GreetingService } from '../services/GreetingService';

describe('GreetingService', () => {
  let greetingService: GreetingService;

  beforeEach(() => {
    greetingService = new GreetingService();
  });

  it('should return a greeting message with the provided name', () => {
    const name = 'John';
    const greeting = greetingService.getGreetingMessage(name);
    expect(greeting).toBe('Hello, John!');
  });

  it('should escape HTML characters in the provided name', () => {
    const name = '<script>alert("XSS attack")</script>';
    const greeting = greetingService.getGreetingMessage(name);
    expect(greeting).toBe('Hello, &lt;script&gt;alert(&quot;XSS attack&quot;)&lt;/script&gt;!');
  });

  it('should fetch a random greeting message from an API', async () => {
    const greeting = await greetingService.getRandomGreetingMessage();
    expect(greeting).toBeDefined();
  });
});
```