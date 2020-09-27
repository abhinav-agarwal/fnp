package com.fnp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.day.cq.wcm.api.Page;
import com.fnp.core.models.Categories;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {Categories.class,
    ComponentExporter.class}, resourceType = CategoriesImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class CategoriesImpl implements Categories {

  @ValueMapValue(
      name = "parentPage",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String parentPage;

  @SlingObject
  protected Resource resource;


  private static final Logger LOGGER = LoggerFactory.getLogger(CategoriesImpl.class);
  static final String RESOURCE_TYPE = "fnp/components/categories";

  @Override
  public String getExportedType() {
    return CategoriesImpl.RESOURCE_TYPE;
  }


  @Override
  public List<Map> getCategoryDetails() {
    List<Map> categoryDetails = new ArrayList<>();
    if(null != resource && StringUtils.isNoneBlank(parentPage)) {
      Resource parentResource = resource.getResourceResolver().getResource(parentPage);
      if(parentResource != null && parentResource.hasChildren()) {
        for (Resource childResource : parentResource.getChildren()) {
          if((!"jcr:content".equals(childResource.getName())) && childResource.getChild("jcr:content") != null && childResource.getChild("jcr:content").getChild("image") != null) {
            ValueMap valueMap = childResource.getChild("jcr:content").getChild("image").getValueMap();
            Map<String, String> iconMap = new HashMap<>();
            iconMap.put("imagePath", valueMap.get("fileReference", String.class));
            iconMap.put("label", childResource.adaptTo(Page.class).getTitle());
            categoryDetails.add(iconMap);
          }
        }
      }
    }
    return categoryDetails;
  }

}
