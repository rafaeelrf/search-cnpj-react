import api from '../services/api';

it('should return success', async () => {
    const resp = await api.get('quote/61190658000106');
    expect(resp.data.success).toEqual(true);
});