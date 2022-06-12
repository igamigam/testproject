from django.test import TestCase

from django.test import TestCase
from .models import Test


class TodoModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Test.objects.create(title="first todo", body="a body here")

    def test_title_content(self):
        test = Test.objects.get(id=1)
        excepted_object_name = f'{test.title}'
        self.assertEqual(excepted_object_name, 'first todo')

    def test_body_content(self):
        test = Test.objects.get(id=1)
        excepted_object_name = f'{test.body}'
        self.assertEqual(excepted_object_name, 'a body here')