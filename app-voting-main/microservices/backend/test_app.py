import unittest


class TestApp(unittest.TestCase):

    def test_fake_pipeline(self):
        response = 'Test Fake Pipeline!'
        self.assertEqual('Test Fake Pipeline!', response)
                
if __name__ == '__main__':
    unittest.main()
