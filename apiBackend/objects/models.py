from django.db import models

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return f'{instance.name}/{filename}'

class City(models.Model):
	''' Город '''
	name = models.CharField('Название', max_length=30)
	content = models.TextField('Описание')
	photo = models.ImageField('Фото', upload_to=user_directory_path, blank=True)
	url = models.URLField('Ссылка', blank=True)
	json = models.JSONField('json', default=dict, blank=True, editable=False)
	



	class Meta:
		verbose_name = 'Город'
		verbose_name_plural = 'Города'


