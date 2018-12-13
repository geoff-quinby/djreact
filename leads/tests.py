from django.test import TestCase
from . import models


class LeadsModelTest(TestCase):

    def setUp(self):
        models.Lead.objects.create(
            first_name='John',
            last_name='Harding',
            email='testemail@django.org',
            message='Hello World',
        )

    def test_property_full_name(self):

        for model in models.Lead.objects.all():
            self.assertEqual(model.full_name(), ' '.join([model.first_name, model.last_name]))

    def test_property_full_name_reverse(self):

        for model in models.Lead.objects.all():
            self.assertEqual(model.full_name(True), ', '.join([model.last_name, model.first_name]))
